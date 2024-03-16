getGithubUser();
class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }
        })
}
async function getGithubUser() {
    let user;
    while (!user) {
        let name = prompt("Введите логин?", "iliakan");
        try {
            user = await loadJson("https://api.github.com/users/${name}");
            alert("Полное имя: ${ user.name }.");
        } catch (err) {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
            } else {
                throw err;
            }
        }
    }
    return user;
}