const compteEpargne = { name: 'epargne', amount: 10000}
const compteCourant = { name: 'courant', amount: 200}

const accounts = [compteEpargne, compteCourant]

let isLoading = false

async function withdraw (account, amountToWithdraw) {
    return new Promise((resolve, reject) => {
        let duration = 1000
        if (account.name === 'epargne') {
            duration = 3000
        }
        isLoading = true
        setTimeout(() => {
            if(amountToWithdraw > account.amount) {
                reject("Tu es trop pauvre !")
            }
            if (account.name === 'epargne') {
                resolve(amountToWithdraw * 1.1)
            }
            resolve(amountToWithdraw)
        }, duration)
    })
}

withdraw(compteEpargne, 50)
    .then((res) => compteEpargne.amount -= res)
    .catch(res => console.error(res))
    .finally(() => isLoading = false)

const btnWithdraw = document.getElementById('btnWithdraw')

if (isLoading) {
    btnWithdraw.innerText = 'Retrait en cours ...'
    btnWithdraw.disable()
}