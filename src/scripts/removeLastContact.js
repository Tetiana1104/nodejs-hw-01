const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');

async function removeLastContact() {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('⚠️ No contacts to delete!');
      return;
    }

    const removedContact = contacts.pop();
    await writeContacts(contacts);

    console.log(`🗑️❌ The last contact are deleted:`, removedContact);
  } catch (error) {
    console.error(error);
  }
}

removeLastContact();
