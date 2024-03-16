let n = 5
counter(n);
console.log(createCounter(n));

function counter(n)
{

    let currentNumber = n;
    let interval = setInterval(() =>
    {
        console.log(currentNumber);
        currentNumber--;
        if (currentNumber < 0)
        {
            clearInterval(interval);
        }
    }, 1000);
}
function createCounter(n)
{
    let interval;
    let currentNumber = n;
    return {
        start: function ()
        {
            currentNumber = currentNumber === 0
                ? n
                : currentNumber;
            interval = setInterval(() =>
            {
                console.log(currentNumber);
                currentNumber--;
                if (currentNumber < 0)
                {
                    clearInterval(interval);
                }
            }, 1000);
        },
        pause: function ()
        {
            clearInterval(interval);
            interval = null;
        },
        stop: function ()
        {
            clearInterval(interval);
            currentNumber = n;
            interval = null;
        },
    };
}