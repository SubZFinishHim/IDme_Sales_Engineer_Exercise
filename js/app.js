async function getUserAttrib() {

    //get access token from query params 
    const queryParamsHash = window.location.hash;
    const accessToken = queryParamsHash.match(/[^#access_token=]\w+/);

    //debug hash
    alert(queryParamsHash);
    alert(accessToken);

    //api call logic
    const url = 'https://api.id.me/api/public/v3/attributes.json?access_token=' + accessToken;
    const response = await fetch(url);
    const data  = await response.json();

    //build HTML
    let attribTable = '<div class="row"><div class="col-4"><b>Attribute</b></div><div class="col-4"><b>Value</b></div></div>';
    for (let r of data.attributes) {
       attribTable += '<div class="row"><div class="col-4">' + r.name + '</div><div class="col-4">' + r.value + '</div></div>';
    }

    let container = document.querySelector('.container');
    container.innerHTML = attribTable;

    //debug json
    console.log(data);
}
