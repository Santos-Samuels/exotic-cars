import { ICarImage } from "@shared/interfaces"

export const  updateCarouselItems = (items: ICarImage[], selectedItem: ICarImage) => {
  const itemIndex = items.findIndex(item => item.id === selectedItem.id)
  const updatedItems = items
  updatedItems.splice(1, 0, updatedItems.splice(itemIndex, 1)[0])
  return updatedItems
}