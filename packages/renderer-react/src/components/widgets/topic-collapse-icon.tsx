import { TopicDirection } from '@blink-mind/core';
import cx from 'classnames';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { collapseRefKey } from '../../utils';

const Icon = styled.div`
  position: absolute;
  top: calc(45% - 6.5px);
  ${({ dir }) => {
    if (dir === TopicDirection.RIGHT)
      return css`
        right: -25px;
      `;
    if (dir === TopicDirection.LEFT)
      return css`
        left: -25px;
      `;
  }};
  border-radius: 50%;
  text-align: center;
  cursor: pointer;
  padding: 0;
  color: #bbc8d2;
  font-size: 12px !important;
  line-height: 20px;
  border: 0;
  z-index: 2;
`;

export function TopicCollapseIcon(props) {
  const { model, topicKey, topicStyle, dir, saveRef, onClickCollapse } = props;
  const topic = model.getTopic(topicKey);
  return topic.subKeys.size > 0 ? (
    <Icon
      ref={saveRef(collapseRefKey(topicKey))}
      onClick={onClickCollapse}
      background={topicStyle.background}
      dir={dir}
      className={cx({
        icon: true,
        iconfont: true,
        [`bm-${topic.collapse ? 'plus' : 'minus'}`]: true
      })}
    />
  ) : null;
}
