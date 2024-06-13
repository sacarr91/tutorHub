const User = require('./User');
const Role = require('./Role');
const UserInstrument = require('./UserInstrument');
const Instrument = require('./Instrument');
const Certification = require('./Certification');
const TutorCertification = require('./TutorCertification');
const Specialty = require('./Specialty');
const TutorSpecialty = require('./TutorSpecialty');
const TutorLink = require('./TutorLink');
const TutorReview = require('./TutorReview');

User.belongsTo(Role, {
    foreignKey: 'role_id'
});

Role.hasOne(User, {
    foreignKey: 'role_id'
});

User.belongsToMany(Instrument, {
    through: UserInstrument,
    foreignKey: 'user_id',
});

Instrument.belongsToMany(User, {
    through: UserInstrument,
    foreignKey: 'instrument_id',
});

User.belongsToMany(Certification, {
    through: TutorCertification,
    foreignKey: 'user_id',
});

Certification.belongsToMany(User, {
    through: TutorCertification,
    foreignKey: 'certification_id',
});

User.belongsToMany(Specialty, {
    through: TutorSpecialty,
    foreignKey: 'user_id',
});

Specialty.belongsToMany(User, {
    through: TutorSpecialty,
    foreignKey: 'specialty_id',
});

User.hasMany(TutorLink, {
    foreignKey: "user_id"
});

User.hasMany(TutorReview, {
    foreignKey: "user_id"
});

module.exports = { User, Role, Instrument, UserInstrument, Certification, TutorCertification, Specialty, TutorSpecialty, TutorLink, TutorReview };

