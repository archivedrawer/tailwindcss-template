import Alpine from 'alpinejs'
import mask from '@alpinejs/mask'
import intersect from '@alpinejs/intersect'
import collapse from '@alpinejs/collapse'
import morph from '@alpinejs/morph'

window.Alpine = Alpine

Alpine.plugin(mask)
Alpine.plugin(intersect)
Alpine.plugin(collapse)
Alpine.plugin(morph)
Alpine.start()
