const state = {
    messageGroup: {
        messageClass: '',
        message: '',
        timeOutEvent: null,
    }
}
const getters = {
    getMessages(state) {
        return state.messageGroup;
    }
}

const mutations = {
    addMessage(state, {message, messageClass}) {
        state.messageGroup = {
            messageClass,
            message,
        }
        if(state.timeOutEvent){
            clearTimeout(state.timeOutEvent);
        }
        state.timeOutEvent = setTimeout(function(){
            state.messageGroup = {
                messageClass: '',
                message: ''
            }
        }, 5000)
    },
    clearMessages(state){
        state.messageGroup = {
            messageClass: '',
            message: '',
        }
    }
}

const action = {
    addMessage({commit}, payload){
        commit('addMessage', payload)
    },
    clearMessages({commit}){
        commit('clearMessages')
    }
}

export default {
    state,
    getters,
    mutations,
    action,
}

