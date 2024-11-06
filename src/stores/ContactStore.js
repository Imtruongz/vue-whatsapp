import { ref } from 'vue'
import { defineStore } from 'pinia'
import ContactService from '../services/ContactService.js'

export const useContactStore = defineStore('contact', () => {
  const contacts = ref([])
  const selectedContact = ref(null)

  function selectContact(contact) {
    selectedContact.value = contact
  }

  const getContactByUser = async (userId) => {
    try {
      const response = await ContactService.handleGetContactByUser(userId)
      contacts.value = response.data || []
    } catch (error) {
      console.error('Failed to fetch contacts:', error)
      contacts.value = [] // Reset to empty if fetch fails
    }
  }

  const updateContactNickname = (contactId, newNickname) => {
    const contact = contacts.value.find(contact => contact.id === contactId);
    if (contact) {
      contact.nickname = newNickname; // Cập nhật nickname
    }
  }

  return {
    contacts,
    getContactByUser,
    selectedContact,
    selectContact,
    updateContactNickname
  }
})
