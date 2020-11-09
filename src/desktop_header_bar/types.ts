export type Data = {
  key: string;
  value: string;
}

export interface DesktopHeaderBarProps {
  announcement?: string;
  title: string;
  market: Data[];
}
