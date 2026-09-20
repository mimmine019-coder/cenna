import { Link } from 'react-router-dom'
import { User, Mail, LogOut, ShoppingBag } from 'lucide-react'

import { useAuth } from '../context/AuthContext'

export default function Account() {
  const { user, signOut } = useAuth()

  if (!user) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <h1>Bạn chưa đăng nhập</h1>

          <Link to="/login">
            Đăng nhập
          </Link>
        </div>
      </div>
    )
  }

  async function handleSignOut() {
    await signOut()
  }

  const username =
    user.user_metadata?.username ||
    user.user_metadata?.display_name ||
    'Cenna User'

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-logo">
          CENNA<span>SHOP</span>
        </div>

        <h1>Tài khoản</h1>

        <div className="account-info">

          <div className="account-row">
            <User size={20} />
            <div>
              <small>Tên người dùng</small>
              <strong>{username}</strong>
            </div>
          </div>

          <div className="account-row">
            <Mail size={20} />
            <div>
              <small>Email</small>
              <strong>{user.email}</strong>
            </div>
          </div>

        </div>

        <Link
          to="/orders"
          className="auth-submit"
        >
          <ShoppingBag size={18} />
          Đơn hàng của tôi
        </Link>

        <button
          className="google-button"
          onClick={handleSignOut}
          type="button"
        >
          <LogOut size={18} />
          Đăng xuất
        </button>

      </div>
    </div>
  )
}