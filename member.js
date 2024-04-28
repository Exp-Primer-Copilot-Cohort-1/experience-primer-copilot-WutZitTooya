function skillsMember() {
  return {
    type: 'SKILLS_MEMBER',
    payload: {
      name: 'John Doe',
      skills: ['HTML', 'CSS', 'JS'],
    },
  };
}