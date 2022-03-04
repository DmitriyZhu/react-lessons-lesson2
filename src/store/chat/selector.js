
export function getChatById(chatId) {
  return (state) => state.chatReducer[chatId]
}