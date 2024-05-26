import React from 'react';
import { render } from '@testing-library/react';
import TagList from './TagList';

describe('TagList', () => {
  const tags = [
    { slug: 'tag1', text: 'Tag 1', count: 5 },
    { slug: 'tag2', text: 'Tag 2', count: 10 },
    { slug: 'tag3', text: 'Tag 3', count: 3 }
  ];

  it('renders the correct number of tags', () => {
    const { container } = render(<TagList tags={tags} />);
    const tagLinks = container.querySelectorAll('.cont_tags a');
    expect(tagLinks.length).toBe(tags.length);
  });

  it('renders each tag as a link with the appropriate href', () => {
    const { getByText } = render(<TagList tags={tags} />);
    tags.forEach(tag => {
      const tagLink = getByText(`${tag.text} (${tag.count})`);
      expect(tagLink.getAttribute('href')).toBe(`/tema/${tag.slug}`);
    });
  });

  it('renders the correct text for each tag', () => {
    const { getByText } = render(<TagList tags={tags} />);
    tags.forEach(tag => {
      expect(getByText(`${tag.text} (${tag.count})`)).toBeInTheDocument();
    });
  });
});