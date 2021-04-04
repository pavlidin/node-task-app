require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6067f15c17d02121d4894575').then(() => {
//     return Task.countDocuments( { completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskCount('6067ef65e9336d270043f487').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})