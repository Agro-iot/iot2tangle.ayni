export interface TableColumn<T> {
    label: string;
    property: keyof T | string;
    type: 'text' | 'image' | 'badge' | 'progress' | 'checkbox' | 'button' | 'material-image';
    isModelProperty?: boolean
    visible?: boolean;
} 