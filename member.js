function skillsMember() {
    var member = {
        name: 'John',
        age: 30,
        skills: ['JS', 'CSS', 'HTML'],
        salary: 2000,
        bonus: 200,
        getSalary: function () {
            return this.salary + this.bonus;
        },
        getSkills: function () {
            return this.skills;
        }
    };
    console.log(member.getSalary());
    console.log(member.getSkills());
}   
