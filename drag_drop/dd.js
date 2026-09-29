import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
const taskNames = [
	{ id: 'task-1', title: 'Sketch the first layout', detail: 'Design · 25 min', status: 'todo' },
	{ id: 'task-2', title: 'Wire up the API request', detail: 'Development · 40 min', status: 'todo' },
	{ id: 'task-3', title: 'Review interaction states', detail: 'Quality · 15 min', status: 'doing' },
	{ id: 'task-4', title: 'Set up the board', detail: 'Getting started · 10 min', status: 'done' },
];

const labels = { todo: 'To do', doing: 'In progress', done: 'Done' };
const statusText = document.querySelector('#status-text');
const connectionStatus = document.querySelector('#connection-status');
const activityList = document.querySelector('#activity-list');
// Keep the active card available to both the dragstart and drop events.
let draggedTask = null;

function makeTask({ id, title, detail, status }) {
	const card = document.createElement('article');
	card.className = 'task-card';
	card.draggable = true;
	card.dataset.taskId = id;
	card.dataset.status = status;
	card.innerHTML = `
		<span class="task-grip" aria-hidden="true">⠿</span>
		<h3></h3>
		<p></p>
		<span class="task-state">${labels[status]}</span>
	`;
	card.querySelector('h3').textContent = title;
	card.querySelector('p').textContent = detail;
	return card;
}

function updateCounts() {
	document.querySelectorAll('[data-count]').forEach((count) => {
		const status = count.dataset.count;
		count.textContent = document.querySelectorAll(`[data-dropzone="${status}"] .task-card`).length;
	});
}

function setConnectionStatus(message, state = 'ready') {
	statusText.textContent = message;
	connectionStatus.dataset.state = state;
}

function addActivity(message, result) {
	activityList.querySelector('.empty-activity')?.remove();
	const entry = document.createElement('li');
	entry.className = 'activity-entry';
	const description = document.createElement('span');
	description.textContent = message;
	const badge = document.createElement('span');
	badge.className = `activity-result ${result}`;
	badge.textContent = result === 'saved' ? 'Recorded' : 'Failed';
	entry.append(description, badge);
	activityList.prepend(entry);
}

// Place each sample task in its starting column, then calculate the totals.
taskNames.forEach((task) => {
	document.querySelector(`[data-dropzone="${task.status}"]`).append(makeTask(task));
});
updateCounts();

document.querySelectorAll('.task-card').forEach((card) => {
	card.addEventListener('dragstart', (event) => {
		draggedTask = card;
		card.classList.add('is-dragging');
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.setData('text/plain', card.dataset.taskId);
	});

	card.addEventListener('dragend', () => {
		card.classList.remove('is-dragging');
		document.querySelectorAll('.drop-zone').forEach((zone) => zone.classList.remove('is-over'));
	});
});

document.querySelectorAll('.drop-zone').forEach((zone) => {
	zone.addEventListener('dragover', (event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = 'move';
		zone.classList.add('is-over');
	});

	zone.addEventListener('dragleave', (event) => {
		if (!zone.contains(event.relatedTarget)) zone.classList.remove('is-over');
	});

	zone.addEventListener('drop', async (event) => {
		event.preventDefault();
		zone.classList.remove('is-over');
		if (!draggedTask) return;

		const previousStatus = draggedTask.dataset.status;
		const nextStatus = zone.dataset.dropzone;
		// Dropping into the current column does not create a move.
		if (previousStatus === nextStatus) return;

		const task = taskNames.find(({ id }) => id === draggedTask.dataset.taskId);
		// Update the board immediately; the API request below records the move.
		zone.append(draggedTask);
		draggedTask.dataset.status = nextStatus;
		draggedTask.querySelector('.task-state').textContent = labels[nextStatus];
		task.status = nextStatus;
		updateCounts();

		// Send the task and its status transition, along with when it happened.
		const move = {
			taskId: task.id,
			taskTitle: task.title,
			from: previousStatus,
			to: nextStatus,
			movedAt: new Date().toISOString(),
		};

		setConnectionStatus('Recording move…', 'pending');
		// Log the payload and outcome in DevTools while testing the API request.
		console.info('Recording task move:', move);
		try {
			const response = await axios.post(API_URL, move);
			console.info('Task move recorded:', response.data);
			addActivity(`${task.title}: ${labels[previousStatus]} → ${labels[nextStatus]} · API id ${response.data.id}`, 'saved');
			setConnectionStatus('Move recorded by API', 'success');
		} catch (error) {
			console.error('Task move recording failed:', error);
			addActivity(`${task.title}: ${labels[previousStatus]} → ${labels[nextStatus]} · ${error.message}`, 'failed');
			setConnectionStatus('Could not reach the API', 'error');
		}
	});
});
