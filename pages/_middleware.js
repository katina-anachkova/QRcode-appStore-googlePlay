import { NextResponse } from 'next/server'

const appLinks = {
  iOS: 'https://apps.apple.com/bg/app/spot-bulgaria/id1590322235',
  Android:
    'https://play.google.com/store/apps/details?id=bg.nepi.spot'
}

const getMobileOS = (userAgent) => {
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone'
  }

  if (/android/i.test(userAgent)) {
    return 'Android'
  }

  if (/iPad|iPhone|iPod/.test(userAgent)) {
    return 'iOS'
  }

  return 'unknown'
}

const redirectMiddleware = (req) => {
  const os = getMobileOS(req.ua && req.ua.ua)
  const link = appLinks[os]

  return link ? NextResponse.redirect(link) : NextResponse.next()
}

export default redirectMiddleware
