const formatHandle = (handle: string | null | undefined): string => {
  if (handle && handle?.length < 20) return handle
  return `${handle?.slice(0, 10)}…`
}

export default formatHandle
