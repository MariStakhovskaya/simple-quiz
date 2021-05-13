const quizData = [
	{
		question: 'Что такое React?',
		a: 'JS-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов',
		b: 'Книга по JS',
		c: 'HTML тег',
		d: 'Reactive model',
		correct: 'a'
	},
	{
		question: 'Что такое компонент в React?',
		a: 'Переменная',
		b: 'Чистая ф-ия, которая принимает пропсы и возвращает JSX',
		c: 'Составная часть, элемент чего-либо',
		d: 'Индивидуальные химические вещества',
		correct: 'b'
	},
	{
		question: 'Что такое DOM?',
		a: 'Ресторан',
		b: 'Документ данных',
		c: 'Окно в браузере',
		d: 'Document Object Model',
		correct: 'd'
	},
	{
		question: 'С помощью какой команды можно создать приложение на React?',
		a: 'Create JS project',
		b: 'Create React App',
		c: 'New React App',
		d: 'нет верного ответа',
		correct: 'b'
	},
	{
		question: 'const [state, setState] = useState(initialState); Что такое setState?',
		a: 'Значение с состоянием приложения',
		b: 'Хук',
		c: 'Функция для обновления состояния приложения',
		d: 'Метод массива',
		correct: 'c'
	},
]


const answerEl = document.querySelectorAll('.answer');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const totalQuiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectedAnswers();

	const currentQuizData = quizData[currentQuiz] ;

questionEl.innerText = currentQuizData.question;

a_text.innerText = currentQuizData.a;
b_text.innerText = currentQuizData.b;
c_text.innerText = currentQuizData.c;
d_text.innerText = currentQuizData.d;

}

// Ф-ия , которая проверяет сделан ли выбор ответа
function getSelected(){
	

	let answer;
//используется для перебора массива.Для каждого элемента массива вызывает функцию callback
	answerEl.forEach(answerEl => {
		if (answerEl.checked){
			answer = answerEl.id;
		}
	})
	return answer;
}

// При переходе на новый вопрос сбрасываем предыдущий выбор
function deselectedAnswers(){
	
		answerEl.forEach(answerEl => {
		answerEl.checked = false;
		
		})

	}

//Метод addEventListener позволяет добавлять несколько обработчиков на одно событие одного элемента
submitBtn.addEventListener("click", () => {
	// Проверяем выбран ли ответ
	const answer =getSelected();
	//Если ответ выбран
	if (answer){
		//Проверяем правильный ли он, если да увеличиваем кол-во правильных ответов
if (answer === quizData[currentQuiz].correct){
	score++;
}

		currentQuiz++;
		// Вызывыем новые вопросы, если количество вызванных вопросов меньше чем количество всего вопросов (то есть длина массива)
		if(currentQuiz < quizData.length){
loadQuiz();
	} else {
		//Иначе квиз окончен , выводим результат
	
		quiz.innerHTML = `<h3>You answered correctly at  ${score}/${quizData.length} questions.</h3> 
		<button onclick = "location.reload()">Начать сначала</button>`
	}
	}
		})
