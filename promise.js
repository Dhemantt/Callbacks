const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' }
]

function getpost() {
    let output = ''
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li> ${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000)
}

// getpost();

function createpost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if (!error) {
                resolve();
            }
            else {
                reject('Error: something went wrong');
            }
    })
    },2000)
}

function deletepost() {
    debugger
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                const deletelement = posts.pop();
                resolve(deletelement);
            }
            else {
                reject('Array is empty now')
            }
        },1000)
    })
}

createpost({ title: 'post three', body: 'this is post three' })
    .then(() => {
        getpost()
        deletepost().then((deletelement) => {
            console.log(deletelement)
            getpost();
            deletepost().then(() => {
                getpost();
                deletepost().then(() => {
                    getpost();
                    deletepost().then(() => {
                    }).catch((err) => {
                        console.log('inside catch block', err)
                    })
                }).catch((err) => {console.log('3rd deletepost')})
            }).catch((err) => {console.log('2nd deletepost')})
        }).catch((err) => {console.log('1st deletepost')})
    }).catch((err) => {console.log('1st createPost')})
    .catch(error);



