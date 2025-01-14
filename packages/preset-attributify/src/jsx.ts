export type TwoStringsCompositionPrefix =
  | 'm'
  | 'p'

export type TwoStringsCompositionSuffix =
  | 'r'
  | 'b'
  | 'l'
  | 't'
  | 'a'

/** Some words can compose with two strings to become a complete unocss rule such as ha, mr, mb */
export type TwoStringsComposition = `${TwoStringsCompositionPrefix}${TwoStringsCompositionSuffix}` | 'ha' | 'wa'

/** Some words can be a complete unocss rule by itself */
export type SpecialSingleWord =
  | 'container'
  | 'flex'
  | 'block'
  | 'inline'
  | 'block'
  | 'table'
  | 'isolate'
  | 'absolute'
  | 'relative'
  | 'fixed'
  | 'sticky'
  | 'static'
  | 'visible'
  | 'invisible'
  | 'grow'
  | 'shrink'
  | 'antialiased'
  | 'italic'
  | 'ordinal'
  | 'overline'
  | 'underline'
  | 'uppercase'
  | 'lowercase'
  | 'capitalize'
  | 'truncate'
  | 'border'
  | 'rounded'
  | 'outline'
  | 'ring'
  | 'shadow'
  | 'blur'
  | 'grayscale'
  | 'invert'
  | 'sepia'
  | 'transition'
  | 'resize'
  | 'transform'
  | 'filter'

export type StringNumberCompositionPrefix =
  | 'op'
  | 'opacity'
  | 'fw'
  | 'p'
  | 'm'
  | 'w'
  | 'h'
  | 'z'

/** Some words can be a complete unocss rule by compose a string and a number, such as op80, fw300, p2, p10px */
export type StringNumberComposition = `${StringNumberCompositionPrefix}${number}${'px' | ''}`

export type PseudoPrefix =
  | 'active'
  | 'before'
  | 'after'
  | 'dark'
  | 'light'
  | 'first'
  | 'last'
  | 'focus'
  | 'hover'
  | 'link'
  | 'root'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | 'enabled'
  | 'disabled'
  | 'all'
  | 'children'

/** Some words can be used to separate utilities, such as font="mono light", text="sm white" */
export type SeparateEnabled =
  | 'align'
  | 'animate'
  | 'backdrop'
  | 'bg'
  | 'blend'
  | 'border'
  | 'box'
  | 'container'
  | 'content'
  | 'cursor'
  | 'display'
  | 'divide'
  | 'filter'
  | 'flex'
  | 'font'
  | 'gap'
  | 'gradient'
  | 'grid'
  | 'h'
  | 'icon'
  | 'justify'
  | 'list'
  | 'm'
  | 'opacity'
  | 'order'
  | 'outline'
  | 'overflow'
  | 'p'
  | 'place'
  | 'pos'
  | 'ring'
  | 'select'
  | 'shadow'
  | 'space'
  | 'table'
  | 'text'
  | 'transform'
  | 'transition'
  | 'underline'
  | 'w'
  | 'z'
  | PseudoPrefix

export type BasicAttributes = StringNumberComposition | SpecialSingleWord | TwoStringsComposition | SeparateEnabled

export type AttributifyNames<Prefix extends string = ''> =
  | `${Prefix}${BasicAttributes}`
  | `${Prefix}${PseudoPrefix}:${BasicAttributes}`

export interface AttributifyAttributes extends Partial<Record<AttributifyNames, string | boolean>> {}
