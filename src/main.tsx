import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRoutes } from './routes/index.tsx'

import './assets/css/global.scss'

import './assets/css/variable/_colors.css'
import './assets/css/variable/_borders.css'
import './assets/css/variable/_typography.css'
import './assets/css/variable/_spacing.css'
import './assets/css/variable/_padding.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
