const User = require('./User');
const Role = require('./Role');

User.belongsTo(Role, {
    foreignKey: 'role_id'
});

Role.hasOne(User, {
    foreignKey: 'role_id'
})

module.exports = { User, Role };
