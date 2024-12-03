const employee = {
    name: "Eli",
    streetAddress: "456 Ocean Street",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const employee1 = {...obj}

    employee1[key] = value

    return employee1
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value

    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    const employee1 = {...obj}

    delete employee1[key]

    return employee1
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]
    
    return obj
}
