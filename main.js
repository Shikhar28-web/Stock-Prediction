import { CreativeCommons as createIcons, Skull, TrendingUp, TrendingDown } from 'lucide';
createIcons({
  icons: {
    Skull,
    TrendingUp,
    TrendingDown
  }
});

const form = document.getElementById('predictionForm');
const submitBtn = document.getElementById('submitBtn');
const shareName = document.getElementById('shareName');
const inputForm = document.getElementById('inputForm');
const resultView = document.getElementById('resultView');
const shareNameResult = document.getElementById('shareNameResult');
const upResult = document.getElementById('upResult');
const downResult = document.getElementById('downResult');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  submitBtn.disabled = true;
  submitBtn.textContent = 'Analyzing...';
  
  try {
    await new Promise(resolve => setTimeout(resolve, 1500));
    const prediction = Math.random() > 0.5 ? 'up' : 'down';
    
    shareNameResult.textContent = shareName.value;
    upResult.classList.toggle('hidden', prediction !== 'up');
    downResult.classList.toggle('hidden', prediction !== 'down');
    
    inputForm.classList.add('hidden');
    resultView.classList.remove('hidden');
  } catch (error) {
    console.error('Prediction failed:', error);
    alert('Failed to get prediction. Please try again.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Get Prediction';
  }
});

resetBtn.addEventListener('click', () => {
  shareName.value = '';
  resultView.classList.add('hidden');
  inputForm.classList.remove('hidden');
});