const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Je me connecte")
    }, 3000)
})

console.log(promise1) // microtask --> priorité -- Promise { pending }

async function asyncCall()  {
    console.log('statring async')
    const res = await promise1
    console.log('ending async')
    return res
}

console.log(await asyncCall()) // Je me connecte