'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Insects', [{
    name:'Western Pygmy Blue Butterfly',
    description:"brown butterfly, we've seen better",
    territory:'North America',
    fact:"have been around for more than 200 mil years",
    millimeters:12
  },
  {
    name:'Patu Digua Spider',
    description:"cute stubby",
    territory:'El Queremal, Valle del Cauca',
    fact:"can read your thoughts",
    millimeters:.33
  },
  {
    name:'Scarlet Dwarf Dragonfly',
    description:"looks like an animated character",
    territory:'Southeast Asia',
    fact:"lived 300 mil years ago",
    millimeters:200
  },
  {
    name:'Midget Moths',
    description:"hairy, possibly homeless",
    territory:null,
    fact:"not-pc name",
    millimeters:3
  },
  {
    name:'Bolbe Pygmaea Mantis',
    description:"aww precious baby",
    territory:'Australia',
    fact:"might have superpowers, good violin player",
    millimeters:100
  },
  {
    name:'Microtityus Minimus Scorpion',
    description:"tiny doom don't make angy",
    territory:'Dominican Republic',
    fact:"stronk, hasn't paid taxes since 2005",
    millimeters:11
  },
  {
    name:'Euryplatea Nanaknihali Fly',
    description:"urghh",
    territory:null,
    fact:"Decapitates ant",
    millimeters:.5
  },
  {
    name:'Uranotaenia lowii Mosquito',
    description:"slimsy",
    territory:'Texas yee haw',
    fact:'not a vampire',
    millimeters:2.5
  },
  {
    name:'Fairyfly Wasp',
    description:'eldritch horror',
    territory:'Hawaii',
    fact:'great movie critic',
    millimeters:.17
  }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects', {name:['Fairyfly Wasp','Uranotaenia lowii Mosquito',
    'Euryplatea Nanaknihali Fly','Microtityus Minimus Scorpion','Bolbe Pygmaea Mantis','Midget Moths',
    'Scarlet Dwarf Dragonfly','Patu Digua Spider','Western Pygmy Blue Butterfly']})
  }
};
