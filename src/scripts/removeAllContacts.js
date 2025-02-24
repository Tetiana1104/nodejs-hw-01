const { writeContacts } = require('../utils/writeContacts');

async function removeAllContacts() {
  try {
    await writeContacts([]);
    console.log('🗑️🔥 All contacts are deleted!');
  } catch (error) {
    console.error(error);
  }
}

removeAllContacts();
