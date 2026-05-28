export const GA_TRACKING_ID = "G-5XTPBSX00Q"; // your ID

type GTagEvent = {
  action: string
  category: string
  label: string
  value?: number
}

export const pageview = (url: string) => {
  (window as any).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
}

export const event = ({ action, category, label, value }: GTagEvent): void => {
  console.log(`[GA Event] action: ${action}, category: ${category}, label: ${label}, value: ${value}`);
  
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
}