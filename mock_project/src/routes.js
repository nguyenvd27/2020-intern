import Home from './components/Home.vue'

import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

import User from './components/user/User.vue'

import AssetType from './components/assetType/AssetType'
import Purpose from './components/purpose/Purpose'
import EmployeeRole from './components/employeeRole/EmployeeRole'
import Department from './components/departments/Department'

import Employee from './components/employee/Employee'
import EmployeeNew from './components/employee/EmployeeNew'
import EmployeeDetail from './components/employee/EmployeeDetail'

import Asset from './components/asset/Asset'
import AssetNew from './components/asset/AssetNew'
import AssetDetail from './components/asset/AssetDetail'

export const routes = [
  { path: '/', name: 'homepage', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/profile', name: 'profile', component: Profile },
  { path: '/user', name: 'user', component: User },

  {path: '/asset-type', name: 'asset-type', component: AssetType },
  { path: '/purposes', name: 'purposes', component: Purpose},
  { path: '/employee-roles', name: 'employee-roles', component: EmployeeRole },
  { path: '/departments', name: 'departments', component: Department },

  { path: '/employees', name: 'employee', component: Employee},
  { path: '/employees/new', name: 'employee-new', component: EmployeeNew},
  { path: '/employees/:id', name: 'employee-detail', component: EmployeeDetail},

  {path: '/assets', name: 'asset', component: Asset},
  {path: '/assets/new', name: 'asset-new', component: AssetNew},
  {path: '/assets/:id', name: 'asset-detail', component: AssetDetail}
]
