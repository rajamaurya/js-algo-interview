const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter;
  
  
  console.log('?', giveMeTheCharacterNOW());