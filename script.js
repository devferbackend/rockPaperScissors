 // --- State ---
    let humanScore = 0;
    let computerScore = 0;

    // --- DOM References ---
    const humanScoreEl    = document.getElementById('human-score');
    const computerScoreEl = document.getElementById('computer-score');
    const roundResultEl   = document.getElementById('round-result');
    const roundDetailEl   = document.getElementById('round-detail');
    const gameOverEl      = document.getElementById('game-over');
    const gameOverTextEl  = document.getElementById('game-over-text');
    const buttons         = document.querySelectorAll('.choice-btn');

    // --- Core Logic (refactored from original code) ---
    function getComputerChoice() {
        const num = Math.floor(Math.random() * 3) + 1;
        if (num === 1) return 'rock';
        if (num === 2) return 'paper';
        return 'scissors';
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return 'draw';
        } else if (
            (humanChoice === 'rock'     && computerChoice === 'scissors') ||
            (humanChoice === 'paper'    && computerChoice === 'rock')     ||
            (humanChoice === 'scissors' && computerChoice === 'paper')
        ) {
            humanScore++;
            return 'human';
        } else {
            computerScore++;
            return 'computer';
        }
    }

    const EMOJI_MAP = { rock: '🪨', paper: '📄', scissors: '✂️' };

    // --- UI Updates ---
    function updateScore() {
        humanScoreEl.textContent    = humanScore;
        computerScoreEl.textContent = computerScore;
    }

    function showRoundResult(winner, humanChoice, computerChoice) {
        const hEmoji = EMOJI_MAP[humanChoice];
        const cEmoji = EMOJI_MAP[computerChoice];

        roundDetailEl.textContent = `${hEmoji} ${humanChoice}  vs  ${computerChoice} ${cEmoji}`;

        if (winner === 'human') {
            roundResultEl.textContent = `You win this round!`;
            roundResultEl.className = 'round-result win';
        } else if (winner === 'computer') {
            roundResultEl.textContent = `You lose this round!`;
            roundResultEl.className = 'round-result lose';
        } else {
            roundResultEl.textContent = `It's a draw!`;
            roundResultEl.className = 'round-result draw';
        }
    }

    function checkGameOver() {
        if (humanScore >= 5) {
            gameOverTextEl.textContent = '🎉 YOU WIN THE GAME!';
            gameOverEl.className = 'game-over show human-wins';
            disableButtons(true);
        } else if (computerScore >= 5) {
            gameOverTextEl.textContent = '💻 COMPUTER WINS!';
            gameOverEl.className = 'game-over show computer-wins';
            disableButtons(true);
        }
    }

    function disableButtons(disabled) {
        buttons.forEach(btn => btn.disabled = disabled);
    }

    function resetGame() {
        humanScore = 0;
        computerScore = 0;
        updateScore();
        roundResultEl.textContent = 'Choose your weapon!';
        roundResultEl.className   = 'round-result';
        roundDetailEl.textContent = '';
        gameOverEl.className      = 'game-over';
        disableButtons(false);
    }

    // --- Event Listeners ---
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const humanChoice    = btn.dataset.choice;
            const computerChoice = getComputerChoice();
            const winner         = playRound(humanChoice, computerChoice);

            updateScore();
            showRoundResult(winner, humanChoice, computerChoice);
            checkGameOver();
        });
    });

    document.getElementById('play-again').addEventListener('click', resetGame);