let n = 15
counter(n);
delay(15).then(() =>
{
    console.log('Прошло 15 секунд');
});
getRepository('goryachkinama');

function delay(N) {
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            resolve();
        }, N * 1000);
    });
}
function counter(n)
{
    if (n < 0)
    {
        return;
    }
    console.log(n);
    delay(1).then(() =>
    {
        counter(n - 1);
    });
}
async function getRepository(username)
{
    return await fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(repositories =>
        {
            console.log(repositories[0].name);
        });
}