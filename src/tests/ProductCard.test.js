import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductCard from '@/components/ProductCard';

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    name: '테스트 상품',
    price: 10000,
    imageUrl: 'https://example.com/product.jpg',
  };

  test('상품명, 가격, 이미지가 렌더링된다', () => {
    render(<ProductCard product={mockProduct} checked={false} onChange={() => {}} />);

    // 상품명
    expect(screen.getByText('테스트 상품')).toBeInTheDocument();

    // 가격 (₩10,000)
    expect(screen.getByText(`₩${mockProduct.price.toLocaleString()}`)).toBeInTheDocument();

    // 이미지 alt 속성과 src 확인
    const img = screen.getByAltText('테스트 상품');
    expect(img).toHaveAttribute('src', mockProduct.imageUrl);
  });

  test('imageUrl이 없으면 placeholder 이미지를 렌더링한다', () => {
    const noImageProduct = { ...mockProduct, imageUrl: '' };
    render(<ProductCard product={noImageProduct} checked={false} onChange={() => {}} />);

    const img = screen.getByAltText(noImageProduct.name);
    expect(img).toHaveAttribute('src', 'https://via.placeholder.com/300');
  });

  test('체크박스를 클릭하면 onChange 콜백이 호출된다', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(<ProductCard product={mockProduct} checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole('checkbox');
    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
