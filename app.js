const input = document.getElementById('input');
const output = document.getElementById('output');
const convertBtns = document.getElementById('convert-btns');
convertBtns.addEventListener('click', onConvert);

function onConvert(e) {
    const convertTo = e.target.dataset.convert
    output.value = '';
    if(input.value) {
        const urls = input.value.split('\n').filter(x => x);
        switch (convertTo) {
            default:
            case 'SV':
                for(const url of urls) {
                    output.value += "https://whitelabel.sembo.se/Redirecting.aspx?page=" +encodeURIComponent(url);
                    output.value += "\n\n-------------\n\n"
                }
                return
            case 'DK':
                for(const url of urls) {
                    output.value += "https://whitelabel.dtf-travel.dk/Redirecting.aspx?page=" +encodeURIComponent(url);
                    output.value += "\n\n-------------\n\n"
                }
                return
        }
    }
}