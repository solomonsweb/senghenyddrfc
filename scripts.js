const fixtures = [
    { date: 'N/A', opponent: 'Pontypool United', result: 'N/A' },
    { date: 'N/A', opponent: 'Monmouth RFC', result: 'N/A' },
    { date: 'N/A', opponent: 'Abertillery BG', result: 'N/A' },
    // Add more fixtures as needed
];

const results = [
    { date: '2025-02-15', opponent: 'Monmouth RFC', result: '19 - 26' },
    { date: '2025-02-01', opponent: 'Abergavenny RFC', result: '73 - 29' },
    { date: '2025-01-25', opponent: 'Newport HSOB', result: '0 - 12' },
    // Add more results as needed
];

function populateFixturesAndResults() {
    const tableBody = document.querySelector('#fixtures tbody');
    fixtures.forEach(fixture => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${fixture.date}</td>
            <td>${fixture.opponent}</td>
            <td>${fixture.result}</td>
        `;
        tableBody.appendChild(row);
    });
    results.forEach(result => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${result.date}</td>
            <td>${result.opponent}</td>
            <td>${result.result}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', populateFixturesAndResults);
