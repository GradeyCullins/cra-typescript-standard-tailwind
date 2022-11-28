import { ReportHandler } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if ((onPerfEntry != null) && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      void getCLS(onPerfEntry)
      void getFID(onPerfEntry)
      void getFCP(onPerfEntry)
      void getLCP(onPerfEntry)
      void getTTFB(onPerfEntry)
    }).catch(() => { /* */ })
  }
}

export default reportWebVitals
