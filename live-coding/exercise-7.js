/**
 * Create a promise from scratch
 */

class CustomPromise {
    // TODO: Implement
}

const customPromise = new CustomPromise((resolver, rejecter) => {
    setTimeout(() => {
        const rand = Math.ceil(Math.random(1 * 1 + 6) * 6)
        if (rand > 2) {
            resolver("Success")
        } else {
            rejecter("Error")
        }
    }, 1000);
});

customPromise
    .then(console.log)
    .catch(console.log);