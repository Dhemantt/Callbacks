function buyacar() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('bought a new car');
        },1000)
    })
}

function triptomanali() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('trip to manali');
        },1000)
    })
}

function triptomountain() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const err = true;
            if (!err) {
                res('trip to mountain');
            }
            else {
                rej('met with an Accident');
            }
           
        },1000)
    })
}

async function fun() {
    try {
        const msg1 = await buyacar()
        console.log(msg1)
        const msg2 = await triptomanali()
        console.log(msg2)
        const msg3 = await triptomountain()
        console.log(msg3)
        }
    catch {
        console.log('something went wrong')
    }
    }
fun();

// buyacar().then((msg) => {
//     console.log(msg)
//     triptomanali().then((msg2) => {
//         console.log(msg2)
//         triptomountain().then((msg3) => { 
//             console.log(msg3)
//                 }).catch((err) => {
//                 console.log(err);
//             })
//     })
// })