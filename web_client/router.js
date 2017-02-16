import React, { Component } from 'react'
import Relay from 'react-relay'
import { Router, Route, IndexRoute, browserHistory, applyRouterMiddleware } from 'react-router'
import useRelay from 'react-router-relay'

import Layout from 'components/layout/layout'
import App from 'components/app'
import PoolList from 'components/pools/pool_list'
import Pool from 'components/pools/pool'
import PoolLayout from 'components/layout/pool'
import BracketList from 'components/brackets/bracket_list'
import UserBracketList from 'components/brackets/user_bracket_list'
import RulesAndScoring from 'components/pages/rules_and_scoring'
import Payments from 'components/pages/payments'
import InviteCode from 'components/pages/invite_code'
import Profile from 'components/profile/profile'
import EditProfile from 'components/profile/edit_profile'
import PoolGames from 'components/pools/games'
import Bracket from 'components/brackets/bracket'
import EditBracket from 'components/brackets/edit_bracket'
import BracketLayout from 'components/layout/bracket'
import Possibilities from 'components/pools/possibilities'

class NoMatch extends Component {
  render() {
    return <Layout>The page you are looking for could not be found :(</Layout>
  }
}

const ListsQueries = {
  lists: () => Relay.QL`query { lists }`
}

const PoolQueries = {
  pool: () => Relay.QL`query { pool(model_id: $poolId) }`
}

const BracketQueries = {
  bracket: () => Relay.QL`query { bracket(model_id: $bracketId) }`
}

const BracketCurrentUserQueries = {
  bracket: () => Relay.QL`query { bracket(model_id: $bracketId) }`,
  current_user: () => Relay.QL`query { current_user }`
}

const CurrentUserQueries = {
  current_user: () => Relay.QL`query { current_user }`
}

const PoolCurrentUserQueries = {
  pool: () => Relay.QL`query { pool(model_id: $poolId) }`,
  current_user: () => Relay.QL`query { current_user }`
}


export default () => {
  return (
    <Router history={browserHistory} render={applyRouterMiddleware(useRelay)} environment={Relay.Store}>
      <Route path="/" component={App}>
        <Route component={Layout}>
          <Route path="pools" component={PoolList} queries={ListsQueries}/>
          <Route path="pools/invite_code" component={InviteCode}/>
          <Route path="user" component={Profile} queries={CurrentUserQueries}/>
          <Route path="user/edit" component={EditProfile} queries={CurrentUserQueries}/>
        </Route>
        <Route path="pools/:poolId" component={PoolLayout} queries={PoolCurrentUserQueries}>
          <IndexRoute component={Pool} queries={PoolQueries} />
          <Route path="brackets" component={BracketList} queries={PoolCurrentUserQueries}/>
          <Route path="my_brackets" component={UserBracketList} queries={PoolCurrentUserQueries}/>
          <Route path="rules" component={RulesAndScoring} queries={PoolQueries}/>
          <Route path="payments" component={Payments} queries={PoolQueries}/>
          <Route path="games" component={PoolGames} queries={PoolQueries}/>
          <Route path="possibilities" component={Possibilities} queries={PoolQueries}/>
        </Route>
        <Route path="brackets/:bracketId" component={BracketLayout} queries={BracketCurrentUserQueries}>
          <IndexRoute component={Bracket} queries={BracketQueries}/>
          <Route path="edit_new" component={EditBracket} queries={BracketQueries}/>
        </Route>
        <Route path='*' component={NoMatch}/>
      </Route>
    </Router>
  )
}

