import axios from "axios"

const SERVER_URL = process.env.VUE_APP_SERVER_URL

// 유저와 관련된 정보를 담을 vuex 모듈, 로컬저장소 까지 사용할 것
const userStore = {
  namespaced: true,
  // accounts(유저 정보), isLogin(로그인 여부), token(JWT 토큰 저장)
  state: {
    accounts: {
      userId: '',
      email: '',
      tier: 0,
      nickname: '',
    },
    accessToken: '',
    refreshToken: '',
    isLogin: false,
    hangman: {
      bestScore: 0,
      rank: 0,
    },
    cardMatching: {
      bestScore: 0,
      rank: 0,
    },
    acidRain: {
      bestScore: 0,
      rank: 0,
    }
  },
  mutations: {
    // 로그인 시에는 관련 유저 데이터를 vuex에 저장, 로그인 여부 참으로
    ADD_USER: function (state, data) {
      state.accounts.userId = data.id
      state.accounts.email = data.email
      state.accounts.tier = data.tier
      state.accounts.nickname = data.nickname
      state.accessToken = data.access
      state.refreshToken = data.refresh
      state.isLogin = true

      state.hangman.bestScore = data.games.hangman.score
      state.hangman.rank = data.games.hangman.rank
      state.cardMatching.bestScore = data.games.cardMatching.score
      state.cardMatching.rank = data.games.cardMatching.rank
      state.acidRain.bestScore = data.games.acidRain.score
      state.acidRain.rank = data.games.acidRain.rank
    },
    // 로그아웃 시에는 관련 유저 데이터를 삭제(공란), 로그인 여부 거짓으로
    DELETE_USER: function (state) {
      state.accounts.userId = ''
      state.accounts.email = ''
      state.accounts.tier = 0
      state.accounts.nickname = ''
      state.accessToken = ''
      state.refreshToken = ''
      state.isLogin = false

      state.hangman.bestScore = 0
      state.hangman.rank = 0
      state.cardMatching.bestScore = 0
      state.cardMatching.rank = 0
      state.acidRain.bestScore = 0
      state.acidRain.rank = 0
    },
    // mutations과 actions의 payload는 항상 데이터 하나의 객체로만 받음 - 필요하면 뭉쳐서 보내야함
    MODIFY_SCORE_RANK(state, { payload, selectGame }) {
    // MODIFY_SCORE_RANK(state, data) {
      // console.log(data.selectGame)
      // console.log(payload)
      // console.log(selectGame)
      if (selectGame === 1) {
        state.acidRain.rank = payload.rank
        state.acidRain.bestScore = payload.score
      } else if (selectGame === 2) {
        state.cardMatching.rank = payload.rank
        state.cardMatching.bestScore = payload.score
      } else {
        state.hangman.rank = payload.rank
        state.hangman.bestScore = payload.score
      }
      state.accounts.tier = payload.tier
    } 
  },
  actions: {
    // 유저 로그인
    // credetials(유저 아이디, 패스워드를 담은 오브젝트)에 담아서 ADD_USER를 동작시킨다.
    loginUser: function (context, credentials) {
        context.commit('ADD_USER', credentials)
        // vuex에서 처리를 하려면 context를 통한 접근을 권장함 (데이터가 제대로 담김)
        // axios.defaults.headers.common['Authorization'] = `JWT ${res.data.token}`
        // axios.defaults.headers.common['Authorization'] = `JWT ${context.state.token}`
        axios.defaults.headers.common['Authorization'] = `Bearer ${context.state.accessToken}`
        // 사실 vuex에서 로컬에 저장하기 때문에 밑의 setItem은 필요가 없지만 혹시 몰라 놔둠
        localStorage.setItem('jwt', context.state.accessToken)
    },
    loginUser2: function (context, credentials) {
      axios({
        method: 'POST',
        url: SERVER_URL + '/accounts/signin/',
        data: credentials,
      }).then((res) => {
        context.commit('ADD_USER', res.data)
        // vuex에서 처리를 하려면 context를 통한 접근을 권장함 (데이터가 제대로 담김)
        // axios.defaults.headers.common['Authorization'] = `JWT ${res.data.token}`
        // axios.defaults.headers.common['Authorization'] = `JWT ${context.state.token}`
        axios.defaults.headers.common['Authorization'] = `Bearer ${context.state.token}`
        // 사실 vuex에서 로컬에 저장하기 때문에 밑의 setItem은 필요가 없지만 혹시 몰라 놔둠
        localStorage.setItem('jwt', res.data.access)
      }).catch(err => {
        console.log(err)
        alert("아이디나 비밀번호를 확인해주세요.")
      })
    },
    // 유저 로그아웃
    logoutUser: function (context) {
      context.commit('DELETE_USER')
      delete axios.defaults.headers.common['Autorization']
      localStorage.removeItem('jwt')
    },
    setScore: function (context, data) {
      // axios로 점수 갱신
      // console.log(data)
      // console.log(score)
      axios({
        method: 'post', 
        url: SERVER_URL + `/games/setScore/${data.selectGame}/`,
        data: {
          score: data.score,
        },
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
      }).then(res => {
        // console.log(res)
        // console.log(data.selectGame)

        // *데이터 하나로 뭉쳐서 보내야함, 그래서 필요한 부분을 변수화 해서 보내야 됨*
        var payload = res.data
        var selectGame = data.selectGame
        context.commit('MODIFY_SCORE_RANK', { payload, selectGame })
        // context.commit('MODIFY_SCORE_RANK', payload)
        // this.rank = res.data.rank
        // this.bestScore = res.data.score
        }).catch(err => {
        console.log(err)
        console.log(err.response)
      })
    }
  },
}

export default userStore