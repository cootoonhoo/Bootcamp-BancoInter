const map = new Map();

map.set('Luiz', 'Admin')
map.set('Marco', 'Admin')
map.set('Hagata', 'Trainee')
map.set('Jose', 'Trainee')


function getAdmin (Map){
    let admins = []
    for([key, value] of Map){
        if(value ==='Admin')
        admins.push(key)
    }
    return admins;
}

console.log(getAdmin(map))