import create from 'zustand';

const useConversation = create((set) => ({
  searchTerm: '',
  conversations: [
    { id: 1, name: 'John Doe', message: 'Hello!' },
    { id: 2, name: 'Jane Smith', message: 'How are you?' },
  ],
  setSearchTerm: (term) => set({ searchTerm: term }),
  addConversation: (conversation) =>
    set((state) => ({
      conversations: [...state.conversations, conversation],
    })),
}));

export default useStore;