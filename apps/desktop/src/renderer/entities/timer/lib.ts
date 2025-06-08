/**
 * 초 단위의 시간을 "MM:SS" 형식의 문자열로 변환합니다.
 */
export function formatTime(timeInSeconds: number): string {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * 분 단위의 시간을 초 단위로 변환합니다.
 */
export function minutesToSeconds(minutes: number): number {
  return minutes * 60;
}

/**
 * 초 단위의 시간을 분 단위로 변환합니다.
 */
export function secondsToMinutes(seconds: number): number {
  return Math.floor(seconds / 60);
}
