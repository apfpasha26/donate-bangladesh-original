// display section when clicked 

function toggleSections(id){
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden');
}

// display background color in button when clicked 

function changeButtonBg(id){
    document.getElementById('donate-btn').classList.add('bg-[#B4F461]', 'border', 'border-1', 'border-gray-400', 'hover:bg-[#c2f086]');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]', 'border', 'border-1', 'border-gray-400', 'hover:bg-[#c2f086]');

    document.getElementById(id).classList.remove('bg-[#B4F461]');
}



function inputFieldValueNumber(id) {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);

    // Check if inputValueNumber is not a number or is a negative number
    if (isNaN(inputValueNumber) || inputValueNumber < 0 || inputValueNumber > mainBalance) {
        alert('Invalid Input. Please enter a valid number.');
        document.getElementById('modal').classList.add('hidden');
        return 0;
    }

    return inputValueNumber;
}


// balance section data 

function balanceValueNumber(id){
    const balanceText = document.getElementById(id).innerText;
    const balanceTextNumber = parseFloat(balanceText);

    return balanceTextNumber;
}