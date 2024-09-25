// event for Blog file 
document.getElementById('blog-btn').addEventListener('click', function () {
    window.location.href = '/blog.html'
})

// toggle section when clicked 

document.getElementById('donate-btn').addEventListener('click', function () {
    toggleSections('donate-section')
})
document.getElementById('history-btn').addEventListener('click', function () {
    toggleSections('history-section')
})

// change button's background color when clicked 

document.getElementById('donate-btn').addEventListener('click', function () {
    changeButtonBg('history-btn')
})
document.getElementById('history-btn').addEventListener('click', function () {
    changeButtonBg('donate-btn')
})



// input field's and button event

// for noakhali section 
document.getElementById('noakhali-input-btn').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText)
    const noakhaliTItle = document.getElementById('noakhali-title').innerText;
    const historySection = document.getElementById('history-section')
    const noakhaliInput = inputFieldValueNumber('noakhali-input-field')
    const noakhaliBalance = balanceValueNumber('noakhali-balance');
    const newNoakhaliBalance = noakhaliBalance + noakhaliInput;
    const newMainBalance = mainBalance - noakhaliInput;

    const currentDate = new Date().toString('en-GB', { timeZone: 'Asia/Dhaka', timeZoneName: 'long' });
    const logDiv = document.createElement('div');
    logDiv.innerHTML = `
    <div class="mb-5 p-5 border border-2 border-gray-400 rounded-xl">
        <p class="font-bold mb-1">${noakhaliInput} Taka is Donated for ${noakhaliTItle}</p>
        <p>Date: ${currentDate}</p>
    </div>
    `;

    historySection.appendChild(logDiv);


    document.getElementById('noakhali-balance').innerText = newNoakhaliBalance;
    document.getElementById('main-balance').innerText = newMainBalance;
    my_modal_5.showModal()
})

// for feni section 
document.getElementById('feni-input-btn').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText)
    const feniTItle = document.getElementById('feni-title').innerText;
    const historySection = document.getElementById('history-section')
    const feniInput = inputFieldValueNumber('feni-input-field')
    const feniBalance = balanceValueNumber('feni-balance');
    const newFeniBalance = feniBalance + feniInput;
    const newMainBalance = mainBalance - feniInput;

    const currentDate = new Date().toString('en-GB', { timeZone: 'Asia/Dhaka', timeZoneName: 'long' });
    const logDiv = document.createElement('div');
    logDiv.innerHTML = `
    <div class="mb-5 p-5 border border-2 border-gray-400 rounded-xl">
        <p class="font-bold mb-1">${feniInput} Taka is Donated for ${feniTItle}</p>
        <p>Date: ${currentDate}</p>
    </div>
    `;

    historySection.appendChild(logDiv);

    document.getElementById('feni-balance').innerText = newFeniBalance;
    document.getElementById('main-balance').innerText = newMainBalance;



    my_modal_5.showModal()
})

// for quota protest section 
document.getElementById('quota-input-btn').addEventListener('click', function () {
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText)
    const quotaTItle = document.getElementById('quota-title').innerText;
    const historySection = document.getElementById('history-section')
    const quotaInput = inputFieldValueNumber('quota-input-field')
    const quotaBalance = balanceValueNumber('quota-balance');
    const newQuotaBalance = quotaBalance + quotaInput;
    const newMainBalance = mainBalance - quotaInput;

    const currentDate = new Date().toString('en-GB', { timeZone: 'Asia/Dhaka', timeZoneName: 'long' });
    const logDiv = document.createElement('div');
    logDiv.innerHTML = `
    <div class="mb-5 p-5 border border-2 border-gray-400 rounded-xl">
        <p class="font-bold mb-1">${quotaInput} Taka is Donated for ${quotaTItle}</p>
        <p>Date: ${currentDate}</p>
    </div>
    `;

    historySection.appendChild(logDiv);


    document.getElementById('quota-balance').innerText = newQuotaBalance;
    document.getElementById('main-balance').innerText = newMainBalance;

    my_modal_5.showModal()
})



