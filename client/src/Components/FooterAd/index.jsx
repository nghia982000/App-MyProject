import React from 'react'
import { CopyrightOutlined } from '@ant-design/icons'
import './style.scss'
const FooterAd = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footerCopyright">
        <CopyrightOutlined />
        <p>Bản quyền thuộc về Iamnqkia</p>
      </div>
    </div>
  )
}

export default FooterAd