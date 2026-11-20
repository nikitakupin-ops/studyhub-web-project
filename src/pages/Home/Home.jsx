
import { useState } from 'react';
import Header from '../../components/Header/Header';
import TaskCard from '../../components/TaskCard/TaskCard';
import styles from './Home.module.css';

const initialTasks = [
  {
    id: 1,
    title: 'Complete React laboratory',
    subject: 'Web Technologies',
    deadline: 'Nov 22',
    completed: false,
  },
  {
    id: 2,
    title: 'Prepare database assignment',
    subject: 'Databases',
    deadline: 'Nov 24',
    completed: false,
  },
  {
    id: 3,
    title: 'Review lecture notes',
    subject: 'Neural Networks',
    deadline: 'Nov 25',
    completed: false,
  },
  {
    id: 4,
    title: 'Submit previous homework',
    subject: 'English',
    deadline: 'Completed',
    completed: true,
  },
];

function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');
  const [showForm, setShowForm] = useState(false);

  const activeTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  function handleAddTask(event) {
    event.preventDefault();

    const title = newTask.trim();

    if (!title) {
      return;
    }

    const task = {
      id: Date.now(),
      title,
      subject: 'Personal task',
      deadline: 'No deadline',
      completed: false,
    };

    setTasks((currentTasks) => [...currentTasks, task]);
    setNewTask('');
    setShowForm(false);
  }

  function handleCompleteTask(id) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task,
      ),
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />

        <main>
          <section className={styles.hero}>
            <div className={styles['hero-content']}>
              <div className={styles['welcome-label']}>
                <span>✦</span>
                YOUR PERSONAL STUDY PLANNER
              </div>

              <h1>
                Make today
                <br />
                <span>count!</span>
              </h1>

              <p className={styles.description}>
                A little progress every day adds up to big results.
                Organize your assignments and make studying easier.
              </p>

              <button
                className={styles['add-button']}
                type="button"
                onClick={() => setShowForm(!showForm)}
              >
                <span>＋</span>
                Add new task
              </button>
            </div>

            <div className={styles['hero-decoration']}>
              <div className={styles['sticker-note']}>
                <span className={styles['sticker-star']}>✦</span>
                <strong>Stay focused!</strong>
                <span>You've got this.</span>
                <div className={styles['sticker-line']}></div>
                <div className={styles['sticker-line-short']}></div>
              </div>

              <div className={styles.pencil}>✎</div>
              <div className={styles['decoration-circle']}></div>
              <div className={styles['decoration-sparkle']}>✧</div>
              <div className={styles['decoration-dots']}>⠿</div>
            </div>
          </section>

          {showForm && (
            <form
              className={styles['add-form']}
              onSubmit={handleAddTask}
            >
              <label htmlFor="task-title">What do you need to do?</label>

              <div className={styles['form-row']}>
                <input
                  id="task-title"
                  type="text"
                  placeholder="Write your new task..."
                  value={newTask}
                  onChange={(event) => setNewTask(event.target.value)}
                />

                <button type="submit">Save task</button>
              </div>
            </form>
          )}

          <section className={styles['section-heading']}>
            <div>
              <span className={styles['section-label']}>YOUR PROGRESS</span>
              <h2>Study overview</h2>
            </div>

            <span className={styles['overview-note']}>
              ✨ One step at a time
            </span>
          </section>

          <section className={styles.stats}>
            <div className={`${styles['stat-card']} ${styles['stat-blue']}`}>
              <div className={styles['stat-icon']}>📚</div>
              <span>Total tasks</span>
              <strong>{tasks.length}</strong>
              <small>All your assignments</small>
            </div>

            <div className={`${styles['stat-card']} ${styles['stat-yellow']}`}>
              <div className={styles['stat-icon']}>✏️</div>
              <span>In progress</span>
              <strong>{activeTasks.length}</strong>
              <small>Keep going!</small>
            </div>

            <div className={`${styles['stat-card']} ${styles['stat-green']}`}>
              <div className={styles['stat-icon']}>🌟</div>
              <span>Completed</span>
              <strong>{completedTasks.length}</strong>
              <small>Great work!</small>
            </div>
          </section>

          <section className={styles['section-heading']}>
            <div>
              <span className={styles['section-label']}>YOUR WORKSPACE</span>
              <h2>My study planner</h2>
            </div>
          </section>

          <section className={styles.dashboard}>
            <TaskCard
              title="My Tasks"
              count={activeTasks.length}
              variant="default"
              id="tasks"
            >
              {activeTasks.length === 0 ? (
                <p className={styles.empty}>
                  No active tasks. Time to relax!
                </p>
              ) : (
                activeTasks.map((task) => (
                  <div className={styles.task} key={task.id}>
                    <button
                      className={styles['check-button']}
                      type="button"
                      aria-label={`Complete ${task.title}`}
                      onClick={() => handleCompleteTask(task.id)}
                    >
                      <span></span>
                    </button>

                    <div className={styles['task-info']}>
                      <strong>{task.title}</strong>
                      <span>{task.subject}</span>
                    </div>
                  </div>
                ))
              )}
            </TaskCard>

            <TaskCard
              title="Upcoming Deadlines"
              count={activeTasks.length}
              variant="deadlines"
              id="deadlines"
            >
              {activeTasks.length === 0 ? (
                <p className={styles.empty}>
                  No upcoming deadlines.
                </p>
              ) : (
                activeTasks.map((task) => (
                  <div className={styles.deadline} key={task.id}>
                    <div className={styles['calendar-icon']}>
                      <span>▦</span>
                    </div>

                    <div className={styles['deadline-info']}>
                      <strong>{task.title}</strong>
                      <span>{task.subject}</span>
                    </div>

                    <span className={styles.date}>{task.deadline}</span>
                  </div>
                ))
              )}
            </TaskCard>

            <TaskCard
              title="Completed Tasks"
              count={completedTasks.length}
              variant="completed"
            >
              {completedTasks.length === 0 ? (
                <p className={styles.empty}>
                  Your finished tasks will appear here.
                </p>
              ) : (
                completedTasks.map((task) => (
                  <div className={styles.task} key={task.id}>
                    <button
                      className={styles['completed-check']}
                      type="button"
                      aria-label={`Mark ${task.title} as active`}
                      onClick={() => handleCompleteTask(task.id)}
                    >
                      ✓
                    </button>

                    <div className={styles['task-info']}>
                      <strong className={styles['completed-title']}>
                        {task.title}
                      </strong>
                      <span>{task.subject}</span>
                    </div>
                  </div>
                ))
              )}
            </TaskCard>
          </section>

          <section className={styles['motivation-note']}>
            <span className={styles['motivation-icon']}>💡</span>
            <div>
              <strong>A little reminder</strong>
              <p>
                Don't forget to take breaks. You don't have to do
                everything at once!
              </p>
            </div>
            <span className={styles['motivation-star']}>✦</span>
          </section>
        </main>

        <footer className={styles.footer}>
          <span>StudyHub</span> — Made for curious minds.
          <span className={styles['footer-decoration']}>✿</span>
        </footer>
      </div>
    </div>
  );
}

export default Home;

